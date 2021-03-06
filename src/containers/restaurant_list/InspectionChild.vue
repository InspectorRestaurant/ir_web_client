<template>
  <a :class="className" @click="toggleViolations()">
    <div class="row px-4 py-4">

      <div class="col-sm-4 align-items-center d-flex">
        <span :class="`badge badge-${score.css} grade-badge mr-4`">
          {{ score.grade }}
          <!-- {{ score.score }} -->
        </span>

        <i class="fa fa-star icon-perfect text-warning" v-if="perfectScore"></i>

        <span class='hover-hide'>
          <i class="fa fa-fw fa-calendar-o"></i>
          {{ howLongAgo}}
        </span>
        <span class='hover-show'>
          <i class="fa fa-fw fa-calendar-o"></i>
          {{ inspection.date }}
        </span>
      </div>

      <div class="col-sm-8 text-right">
        <span class="badge badge-secondary" v-if="inspection.type !== 'Inspection'">
          {{ inspection.type }}
        </span>
        <span :class="`badge badge-${score.css}`">
          {{text}}
        </span>
        <span class="badge badge-primary" v-b-tooltip.hover.top :title="inspection.comment" v-if="inspection.comment">
          <i class="fa fa-fw fa-comment"></i>
          Comments
        </span>
        <!-- <span :class="badge"> -->
          <!-- <i :class="icon"></i> -->
        <!-- </span> -->
      </div>
    </div>
    <div class="row mt-2" v-if="hasViolations() && expanded">
      <!-- <div class="col-sm-12"> -->
        <!-- <pre class="bg-dark text-light">{{ violations }}</pre> -->
      <!-- </div> -->

      <div class="col-sm-12">
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="v in violations" :key="v.id">
            <span class="badge badge-secondary">
              {{ v.vid }}
            </span>
            {{ v.desc }}
          </li>
        </ul>
      </div>
    </div>
  </a>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import moment from 'moment'
export default {
  name: 'inspection_child',
  props: ['inspection'],
  data () {
    return {
      expanded: false
    }
  },
  methods: {
    hasViolations () {
      return this.inspection.violations[0] !== 'None'
    },
    toggleViolations () {
      this.expanded = !this.expanded
    }
  },
  computed: {
    className () {
      let css = ['list-group-item py-0 px-0']
      if (this.hasViolations()) css.push('list-group-item-action')
      return css.join(' ')
    },
    badge () {
      let badge = ['badge']
      if (this.hasViolations()) {
        badge.push('badge-warning')
      } else {
        badge.push('badge-success')
      }
      return badge.join(' ')
    },
    icon () {
      let icon = ['fa', 'fa-fw']
      if (this.hasViolations()) {
        icon.push('fa-warning')
      } else {
        icon.push('fa-check')
      }
      return icon.join(' ')
    },
    text () {
      if (this.hasViolations()) {
        const len = this.inspection.violations.length
        if (len > 1) return `${len} Violations`
        return `${len} Violation`
      } else {
        return 'Perfect'
      }
    },
    perfectScore () {
      if (this.hasViolations()) return false
      return true
    },
    hasComment () {
      return this.inspection.comment !== 'None'
    },
    howLongAgo () {
      return moment(this.inspection.date).fromNow()
    },
    violations () {
      return _.chain(this.$store.getters['violation/collection'])
      .filter((v) => {
        return this.inspection.violations.includes(v.vid)
      })
      .map((v) => {
        v.id = _.uniqueId('VIOLATION_')
        return v
      })
      .value()
    },
    score () {
      let violations = _.filter(this.$store.getters['violation/collection'], (v) => {
        return this.inspection.violations.includes(v.vid)
      })

      let score = 0
      _.each(violations, (v) => {
        if (v.critical) {
          // score += 5
          score += 7
        } else {
          // score += 2
          score += 3
        }
      })

      // Defines score
      if (score < 14) {
        return { grade: 'A', score: score, css: 'success' }
      } else if (score < 28) {
        return { grade: 'B', score: score, css: 'primary' }
      } else if (score < 42) {
        return { grade: 'C', score: score, css: 'warning' }
      } else {
        return { grade: 'D', score: score, css: 'danger' }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  span.badge.grade-badge
    font-size: 120%

  i.fa.icon-perfect
    position: absolute
    top: -.5rem
    left: 2.25rem

  a.list-group-item
    span.hover-hide
      display: block
    span.hover-show
      display: none
    &:hover
      span.hover-hide
        display: none
      span.hover-show
        display: block
</style>
